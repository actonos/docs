---
name: actonos-architecture-map
description: Instant architectural knowledge map and internal subsystem cheat-sheet for ActonOS. Provides immediate context on daemon internals (actond), Dual-Runtime HAL, Multi-Agent Swarms, Hardware Vault, Hybrid RAG memory, and OpenClaw Heartbeat without reading entire codebases.
---

# ActonOS Core Architecture Knowledge Map

This skill serves as the central mental model and fast reference for ActonOS subsystems, data flows, and code patterns.

---

## 1. System Topology & Source Code Map

| Subsystem | Go Source File in `D:\Projects\ActonOS\` | Key Structs / Functions | REST / WebSocket Route |
|:---|:---|:---|:---|
| **Daemon Entrypoint** | `cmd/actond/main.go` | `main()`, `initRuntime()`, `startHttp()` | `:8080` |
| **Dual-Runtime HAL** | `internal/hal/hal.go`, `baremetal.go`, `docker.go` | `HardwareAbstractionLayer`, `GetRuntimeMode()` | `/api/system/telemetry` |
| **Agent Engine & Swarm** | `internal/agent/engine.go`, `swarm.go` | `AgentInstance`, `ExecuteReAct()`, `Delegate()` | `/api/agents`, `/api/chat/messages` |
| **Missions & DAG** | `internal/mission/planner.go`, `runner.go` | `MissionDAG`, `StepNode`, `Checkpoint()` | `/api/missions`, `/api/approvals` |
| **Dynamic Tooling** | `internal/tools/registry.go`, `mcp.go`, `wasm.go` | `ToolRegistry`, `MCPClient`, `WazeroRunner` | `/api/tools` |
| **Hardware Vault** | `internal/security/vault.go`, `audit.go` | `VaultManager`, `EncryptAESGCM()`, `AuditLog()` | `/data/config/vault.db` |
| **Hybrid Memory RAG** | `internal/memory/hybrid.go`, `vector.go` | `HybridRAG`, `ChromemStore`, `EbbinghausDecay()` | `/data/storage/app.db` |
| **OpenClaw Heartbeat** | `internal/automations/heartbeat.go` | `PulseDaemon()`, `looksLikeIdleChatter()` | Internal Cron / Interval |
| **Connectors & OAuth** | `internal/connectors/oauth.go` | `OAuthPKCEManager`, `RefreshTokenDaemon()` | `/api/connectors` |
| **Channels Gateway** | `internal/channels/telegram.go`, `discord.go` | `ChannelAdapter`, `PairingPIN()` | `/api/channels` |
| **Tailscale Remote** | `internal/network/tsnet.go` | `tsnet.Server`, `InitMeshNode()` | Tailscale WireGuard Mesh |

---

## 2. Dual-Runtime HAL Invariants

1. **Bare-Metal Mode**:
   - Environment: Detected when `/.dockerenv` is absent and D-Bus is accessible.
   - Hotspot: NetworkManager D-Bus creates Wi-Fi SSID `ActonOS-XXXX` @ `192.168.4.1`.
   - Sandbox: Bubblewrap (`bwrap`) with read-only `/`, `/usr`, `/bin` and unmounted `/data/config`.
   - Cgroups v2: Hard limits of **512 MB RAM**, **50% CPU** (`50000 100000`), **30 PIDs**.
2. **Docker Mode**:
   - Environment: Detected when `/.dockerenv` exists or `RUNTIME_MODE=docker`.
   - Security: Runs under non-root `acton` user (UID 1000) inside subshell jail.
   - Telemetry: Metrics read directly from `/sys/fs/cgroup/`.

---

## 3. Security & Cryptographic Master Invariants

- **Hardware Vault**: Khóa chủ (Master Key) dẫn xuất từ DMI UUID + CPU Serial qua `Argon2id` (64MB memory, 4 iterations).
- **Mã hóa Dữ liệu**: AES-256-GCM với 96-bit Nonce ngẫu nhiên cho mỗi bản ghi.
- **Audit Ledger**: Mỗi sự kiện ghi nối tiếp vào `/data/logs/audit.jsonl` với chuỗi băm $H_n = \text{SHA-256}(H_{n-1} + \text{Log}_n)$.

---

## 4. OpenClaw Heartbeat Zero-Waste Contract

- **Idle Pulse**: Khi danh sách tác vụ trống và không có chỉ thị trong `HEARTBEAT.md`, hệ thống **không gọi LLM** và lập tức trả về mã `HEARTBEAT_OK` (0 token).
- **Headless Mode Prompt**:
  ```
  [AUTONOMOUS HEADLESS EXECUTION MODE]
  There is no human in the loop for this turn. Do not greet or ask how you can help.
  If the directive is satisfied or no action is required, output ONLY: HEARTBEAT_OK
  ```
- **Anti-Chatter Filter**: Hàm `looksLikeIdleChatter(text)` lọc bỏ các câu chào hỏi ngoài ý muốn.
- **Active Hours**: Hạn chế chu kỳ chạy ngầm trong khung giờ quy định (ví dụ `08:00 - 22:00`).

---

## 5. UI Design System Tokens ("Soft Meadow")

- **Canvas**: `#f9fbf2` (Warm Meadow canvas)
- **Card Surface**: `#eff2e5` (Soft Meadow surface card)
- **Deep Ink**: `#130e30` (Primary headings and high-contrast text)
- **Slate Text**: `#5f5c6e` (Muted technical body copy)
- **Hi-Yellow**: `#ffe228` (Primary action CTA button and accent pill)
- **Geometry**: Pill radius `1440px`, Card radius `24px`
- **Fonts**: `Manrope` (Headings), `Inter` (Body copy), `JetBrains Mono` (Code & Telemetry)
- **Logo Rule**: Logo image (`actonos_logo.png` & `actonos_logo_light.png`) already includes the wordmark text; never duplicate text next to the logo.
