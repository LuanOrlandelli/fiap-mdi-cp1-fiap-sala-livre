# 📱 FIAP Sala Livre

## 📌 Sobre o Projeto

O **FIAP Sala Livre** é um aplicativo mobile desenvolvido com React Native (Expo) que permite aos alunos consultar salas disponíveis dentro da FIAP para estudo, reuniões e trabalhos em grupo.

### 🎯 Problema que resolve
Muitos alunos enfrentam dificuldade em encontrar salas livres para estudar ou realizar atividades em grupo dentro da instituição. O aplicativo centraliza essas informações, facilitando a organização e otimização dos espaços disponíveis.

### 🏫 Operação da FIAP escolhida
A operação escolhida foi a **gestão de espaços acadêmicos (salas de estudo)**, pois é uma necessidade comum entre os alunos e impacta diretamente na produtividade e experiência dentro da faculdade.

### ⚙️ Funcionalidades implementadas
- Listagem de salas disponíveis
- Filtro de salas por período
- Tela de detalhes da sala
- Simulação de reserva de sala
- Indicador de carregamento (loading)
- Estado vazio quando não há resultados

---

## 👥 Integrantes do Grupo

- **Luan Orlandelli** - RM 554747  
- **Arthur Bobadilla** - RM 555056  

---

## 🚀 Como Rodar o Projeto

### 📋 Pré-requisitos

- Node.js (versão LTS recomendada)
- npm ou yarn
- Expo CLI (opcional)
- Aplicativo Expo Go no celular

### ▶️ Passo a passo

Rode no terminal do seu computador:

```bash
git clone https://github.com/LuanOrlandelli/fiap-mdi-cp1-fiap-sala-livre.git
cd fiap-mdi-cp1-fiap-sala-livre
npm install
npx expo start
```

Depois, com o aplicativo "Expo Go" já instalado no celular, abra a câmera e escaneie o QR Code. 

---

## 📸 Demonstração

### 🖼️ Telas do aplicativo



### 🎥 Vídeo de demonstração



---

## 🧠 Decisões Técnicas

### 📂 Estrutura do projeto

O projeto foi estruturado utilizando o Expo Router, com organização baseada em rotas.

### ⚛️ Hooks utilizados

- useState → gerenciamento de estado  
- useEffect → carregamento de dados  
- useRouter → navegação  
- useLocalSearchParams → parâmetros de rota  

### 🧭 Navegação

Utilização do Expo Router para navegação entre telas e passagem de parâmetros.

---

## 🚧 Próximos Passos

- Integração com API real
- Autenticação de usuários
- Reserva real de salas
- Histórico de reservas
- Filtros avançados

---

## 📌 Tecnologias Utilizadas

- React Native
- Expo
- Expo Router
- TypeScript

---

## 💡 Considerações Finais

Projeto desenvolvido com foco em aprendizado prático de desenvolvimento mobile.
