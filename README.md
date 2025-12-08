# 🚀 Furious App - Acelerador de Downloads Profissional

Sistema completo de gerenciamento de downloads com interface web moderna. Suporta URLs diretas, magnets, torrents e JSON com fontes customizadas.

**Pronto para produção com instalador .EXE para Windows!**

---

## ✨ Recursos Principais

### 📦 Portabilidade Total
- ✅ **Instalador automático** (.EXE com um clique)
- ✅ **100% independente**: Python 3.10.5, Node.js 18.16.1 e aria2 1.37.0 inclusos
- ✅ **Sem dependências externas**: Funciona offline após instalação
- ✅ **Desinstalação segura**: Remove apenas a aplicação, preserva downloads

### 📥 Downloads Avançados
- ✅ **URLs diretas** com suporte a resumo (range requests)
- ✅ **Magnet links e torrents** via aria2
- ✅ **Downloads segmentados** (paralelo com múltiplas conexões)
- ✅ **Fila automática** (downloads sequenciais)
- ✅ **Controle completo**: Pause, Resume, Cancel
- ✅ **Monitoramento real-time**: Peers, seeders, velocidade

### 🎨 Interface Web
- ✅ **Design cyberpunk profissional** com TailwindCSS
- ✅ **Dashboard** com estatísticas animadas
- ✅ **Responsivo** (funciona em desktop, tablet, mobile)
- ✅ **Notificações** para eventos (criação, conclusão, erro)
- ✅ **Menu intuitivo** e fácil de navegar

### 📊 Gerenciamento
- ✅ **Fontes JSON** customizadas
- ✅ **Histórico completo** de downloads
- ✅ **Filtros por status** (rodando, pausado, concluído, erro)
- ✅ **Banco de dados** SQLite para persistência

---

## 🚀 Como Começar

### Windows - Instalador (.EXE)

```powershell
# 1. Compile o instalador (requer NSIS 3.08+)
.\compilar-instalador.ps1

# 2. Resultado: FuriousAppInstaller.exe (418.57 MB)

# 3. Distribua para usuários ou teste:
# - Desinstale versão anterior (se houver)
# - Execute FuriousAppInstaller.exe
# - Selecione pasta: C:\Program Files\FuriousApp
# - Clique "Instalar"

# 4. Usuário clica em "Furious App" no Desktop
# 5. Interface abre em janela desktop nativa (PyQt5)
```

**Documentação Rápida:**
- 📖 [COMECE_AQUI.md](docs/COMECE_AQUI.md) - 3 passos para começar
- 🔨 [COMPILAR_INSTALADOR.md](docs/COMPILAR_INSTALADOR.md) - Guia detalhado
- 🎉 [POS_INSTALACAO.md](docs/POS_INSTALACAO.md) - Como usar após instalar
- 📦 [EXECUTAVEL_README.md](docs/EXECUTAVEL_README.md) - Documentação técnica

---

## 📖 Interface da Aplicação

### 🏠 Dashboard
- Estatísticas de downloads (total, rodando, pausado, concluído, erro)
- Gráficos animados
- Status geral do sistema

### 📥 Downloads
- Lista completa de downloads com status
- Controle (pause, resume, cancel)
- Detalhes (velocidade, peers, seeders)
- Exibição de itens em fila

### 🔗 Fontes JSON
- Carregue de URL ou cole JSON
- Visualize items disponíveis
- Selecione múltiplos itens
- Configure pasta de destino

### ⚙️ Novo Download
- URL direta para arquivos
- Detecção automática de nome
- Configurações avançadas (k, n_conns, verificar SSL)

---

## 🛠️ Componentes Técnicos

### Backend (Python FastAPI)
```
backend/
├── main.py              # API Rest + WebSocket
├── db.py                # SQLite + migrations
├── config.py            # Configurações
└── models/
    └── models.py        # SQLModel schemas
```

### Engine (Download Manager)
```
engine/
├── manager.py           # JobManager - fila sequencial
├── download.py          # Downloader serial/segmentado
└── aria2_wrapper.py     # Interface com aria2
```

### Frontend (Vue.js 3)
```
frontend/
├── dist/                # Build final (servido pelo backend)
├── src/
│   ├── components/      # Vue components
│   ├── stores/          # Pinia (estado global)
│   ├── views/           # Páginas (Dashboard, Downloads, etc)
│   ├── services/        # Cliente HTTP
│   └── styles/          # TailwindCSS + cyberpunk theme
```

### Portables Inclusos
```
portables/
├── python-64bits/              # Python 3.10.5 (renomeado!)
├── node-v18.16.1-win-x64/     # Node.js
└── aria2-1.37.0/              # aria2 (download engine)
```

**Nota importante:** Python foi renomeado de `Portable-Python-3.10.5_x64` para `python-64bits` para evitar problemas de compilação NSIS com nomes muito longos.

---

## 📊 Status do Projeto

| Aspecto | Status |
|---------|--------|
| Backend API | ✅ Completo |
| Frontend UI | ✅ Completo |
| Downloads | ✅ Funcionando |
| Magnet/Torrent | ✅ Funcionando |
| Real-time Updates | ✅ WebSocket |
| Persistência | ✅ SQLite |
| Instalador NSIS | ✅ Pronto |
| Documentação | ✅ Completa |
| **Produção** | ✅ **PRONTO** |

---

## 🔧 Instalação do Desenvolvedor

### Pré-requisitos
- Python 3.9+
- Node.js 14+
- Git

### Setup

```bash
# 1. Clone ou extraia o projeto
cd aplicacao-pessoal-json

# 2. Backend
pip install -r requirements.txt

# 3. Frontend
cd frontend
npm install
npm run build
cd ..

# 4. Execute
python run.py
```

Abra: http://localhost:8000

---

## 🎯 Compilar Instalador .EXE

### Pré-requisitos
- NSIS 3.08+ (https://nsis.sourceforge.io/)

### Compilação

```powershell
# Verifique se NSIS está instalado
Test-Path "C:\Program Files (x86)\NSIS\makensis.exe"

# Compile o instalador
.\compilar-instalador.ps1

# Resultado: FuriousAppInstaller.exe
```

---

## 📁 Estrutura de Pastas

```
aplicacao-pessoal-json/
├── portables/
│   ├── python-64bits/                (Python portátil)
│   └── node-v18.16.1-win-x64/        (Node portátil)
│   └──aria2-1.37.0/                     (aria2 binário)
├── backend/                          (API Python/FastAPI)
├── engine/                           (Download manager)
├── frontend/                         (Vue.js app)
├── launcher/                         (Scripts de inicialização)
├── nsis-installer.nsi                (Config do instalador)
├── compilar-instalador.ps1           (Script de compilação)
├── COMECE_AQUI.md                    (Início rápido)
├── POS_INSTALACAO.md                 (Pós-instalação)
└── README.md                         (Este arquivo)
```

---

## 🔌 API Endpoints

### Downloads
- `POST /api/jobs` - Criar download
- `GET /api/jobs` - Listar downloads
- `GET /api/jobs/{id}` - Detalhes
- `POST /api/jobs/{id}/pause` - Pausar
- `POST /api/jobs/{id}/resume` - Retomar
- `POST /api/jobs/{id}/cancel` - Cancelar
- `DELETE /api/jobs/{id}` - Deletar arquivo

### Fontes
- `POST /api/load-json` - Carregar de URL
- `POST /api/load-json/raw` - Carregar JSON direto
- `GET /api/sources` - Listar fontes
- `DELETE /api/sources/{id}` - Deletar fonte

### Sistema
- `WS /ws` - WebSocket (progresso real-time)
- `GET /api/aria2/status` - Status do aria2

### Documentação Interativa
- http://localhost:8000/docs (Swagger UI)
- http://localhost:8000/redoc (ReDoc)

---

## 🎨 Temas e Personalizações

### Cyberpunk Theme
- Cores: Cyan (#06b6d4), Pink (#ec4899), Purple (#8b5cf6)
- Animações: Pulsing, bouncing, glowing effects
- Ícones: SVG customizados com gradientes

### Customização
Edite: `frontend/src/styles/cyberpunk.css`

---

## 🚀 Performance

- **Backend**: FastAPI (async/await)
- **Frontend**: Vue 3 (composition API)
- **Downloads**: aria2 (motor profissional)
- **Banco**: SQLite (rápido e leve)
- **Tamanho do .EXE**: ~475MB (Python + Node inclusos)

---

## 🔐 Segurança e Privacidade

- ✅ **Offline first**: Funciona sem conexão (após instalação)
- ✅ **Sem rastreamento**: Nenhum dado enviado
- ✅ **Código aberto**: Audite conforme necessário
- ✅ **SSL/TLS**: Suporte a HTTPS para downloads

---

## 📝 Notas Importantes

### Pasta de Downloads
Por padrão: `C:\Users\[Seu Usuário]\Downloads`  
Pode ser customizada ao criar cada download

### aria2
- Baixado de: https://aria2.github.io/
- Versão incluída: 1.37.0
- Localização: `portables/aria2-1.37.0/`

### Banco de Dados
- Localização: `data.db` (projeto root)
- Tipo: SQLite 3
- Backup recomendado antes de desinstalar

---

## ❓ Dúvidas Frequentes

**P: Preciso de Python/Node instalados?**  
R: Não! Tudo está incluído no .EXE.

**P: Funciona offline?**  
R: Sim, após instalação funciona 100% offline.

**P: Como atualizar?**  
R: Desinstale a versão antiga e instale a nova.

**P: Onde são salvos os downloads?**  
R: Você escolhe ao criar cada download.

**P: Posso usar em Mac/Linux?**  
R: Sim, execute via Python. O instalador .EXE é apenas Windows.

---

## 🎓 Tecnologias Utilizadas

**Backend**
- Python 3.10.5
- FastAPI
- SQLModel
- Uvicorn
- aria2

**Frontend**
- Vue 3
- Pinia (state management)
- TailwindCSS
- Vite
- Axios

**DevOps**
- NSIS (instalador)
- PowerShell (scripts)
- Batch (launcher)

---

## 📄 Licença e Créditos

Desenvolvido com ❤️ por furiousofnight Apps

**Data de Lançamento**: Dezembro 2025  
**Versão**: 1.0.0  
**Status**: ✅ Produção

---

## 📞 Suporte

Para dúvidas ou problemas:
1. Consulte `COMECE_AQUI.md` (início rápido)
2. Leia `POS_INSTALACAO.md` (pós-instalação)
3. Verifique os logs no console
4. Acesse http://localhost:8000/docs para API docs

---

**Aproveite o Furious App! 🚀**

Then visit `http://127.0.0.1:8008` to access the frontend UI.


Next steps:
- Add tests and packaging scripts (PyInstaller)
- Improve error handling and retry/backoff strategies
- Add pause/resume for segmented downloads (persist part metadata)
- Add authentication or session management if desired
