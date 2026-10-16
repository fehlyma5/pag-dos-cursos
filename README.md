# 🎓 Landing Page — Cursos do IFRR

Landing page institucional desenvolvida para apresentar cursos de graduação e incentivar candidatos a participar do processo seletivo (vestibular).

O projeto tem como proposta oferecer uma experiência visual moderna, responsiva e intuitiva, facilitando o acesso às informações dos cursos e direcionando os visitantes para os canais de inscrição.

## 🚀 Objetivo do projeto

Desenvolver uma página web para divulgação dos cursos, com foco na comunicação institucional, na experiência do usuário e na conversão de visitantes em candidatos ao vestibular.

## 📚 Cursos apresentados

- **Biologia** — Ciências da vida e dos ecossistemas.
- **TADS** — Tecnologia em Análise e Desenvolvimento de Sistemas.
- **Saneamento Ambiental** — Meio ambiente e saneamento.
- **Matemática** — Raciocínio lógico e ciências exatas.
- **Educação Física** — Saúde, esporte e movimento humano.

## ✨ Funcionalidades

- Banner principal rotativo com chamadas para ação (CTA).
- Navegação entre as seções da página.
- Destaque visual para o vestibular e as inscrições.
- Cards individuais para apresentação dos cursos.
- Seção institucional de apresentação.
- Botões de chamada para ação.
- Layout responsivo para computadores, tablets e celulares.
- Identidade visual baseada nas cores institucionais.
- Rodapé com atalhos para cursos, vestibular e contato.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Aplicação |
|---|---|
| HTML5 | Estruturação do conteúdo |
| CSS3 | Estilização, identidade visual e responsividade |
| JavaScript | Interatividade e controle do banner rotativo |
| Python | Servidor HTTP local para testes |
| Git | Controle de versão |
| GitHub | Hospedagem do código-fonte |
| GitHub Pages | Publicação da versão estática do site |

## 🎨 Identidade visual

A identidade visual utiliza duas cores principais:

- 🟢 Verde: `#7ABA05`
- 🔴 Vermelho: `#D61A0C`

As cores são combinadas com fundos brancos, tons de cinza e textos escuros para criar contraste, legibilidade e destaque para os botões de inscrição.

## 📁 Estrutura do projeto

```text
landing-page-cursos-do-ifrr/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   ├── banner-1.jpg
│   ├── banner-2.jpg
│   ├── banner-3.jpg
│   ├── biologia.jpg
│   ├── tads.jpg
│   ├── saneamento.jpg
│   ├── matematica.jpg
│   └── educacao-fisica.jpg
│
├── python/
│   └── app.py
│
└── README.md
```

> **Observação:** a estrutura acima representa a organização prevista para o projeto. Os arquivos de imagens devem ser adicionados à pasta `images/`, respeitando os nomes utilizados no HTML, ou os caminhos do código devem ser atualizados.

## 💻 Como executar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/fehlyma5/landing-page-cursos-do-ifrr.git
```

### 2. Acesse a pasta

```bash
cd landing-page-cursos-do-ifrr
```

### 3. Execute localmente

Se você tiver Python 3 instalado e o arquivo `python/app.py` configurado conforme o projeto:

```bash
python3 python/app.py
```

Acesse no navegador:

```text
http://localhost:8000
```

**Alternativa:** abra o arquivo `index.html` diretamente no navegador ou utilize a extensão Live Server no Visual Studio Code.

## 🌐 Publicação com GitHub Pages

O GitHub Pages permite publicar a versão estática do projeto gratuitamente.

1. Acesse o repositório no GitHub.
2. Entre em **Settings**.
3. Selecione **Pages**.
4. Em *Build and deployment*, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)`.
6. Salve as configurações e aguarde a publicação.

O endereço público será disponibilizado na seção GitHub Pages do repositório.

> O GitHub Pages publica HTML, CSS, JavaScript e outros arquivos estáticos. O Python não será executado no servidor de publicação.

## 🔄 Como atualizar o projeto

Após modificar os arquivos localmente, utilize:

```bash
git add .
git commit -m "Atualiza landing page"
git push origin main
```

Após o envio, o GitHub Pages atualizará o site conforme o processo de publicação.

## 📌 Melhorias futuras

- Criar páginas individuais para cada curso.
- Adicionar duração, modalidade, turnos e perfil profissional.
- Integrar os botões de inscrição ao sistema oficial do processo seletivo.
- Incluir links oficiais para edital e calendário acadêmico.
- Adicionar acessibilidade, incluindo navegação por teclado e textos alternativos.
- Implementar métricas de acesso e acompanhamento dos cliques nos botões.
- Aprimorar o desempenho e a otimização para mecanismos de busca (SEO).

## 👨‍💻 Desenvolvimento

Projeto desenvolvido com o objetivo de praticar desenvolvimento web, organização de arquivos, responsividade, controle de versão com Git e publicação de páginas estáticas com GitHub Pages.

---

**Status:** Em desenvolvimento.

**Licença:** A definir.

> Este projeto é uma iniciativa de desenvolvimento web. Antes da publicação institucional, confirme a autorização para uso do nome, da identidade visual, das imagens e das informações oficiais da instituição.
