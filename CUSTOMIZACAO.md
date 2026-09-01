# 🔧 Guia Rápido de Customização

## 1. ALTERAR NÚMERO DE WHATSAPP

**Arquivo:** `script.js` (linha ~22)

```javascript
const CONFIG = {
    whatsappNumber: "5511999999999", // ALTERE AQUI
    // ...
};
```

**Formato:** `55` (Brasil) + `DDD` + `número` (apenas dígitos)

**Exemplos:**
- São Paulo (11) 98765-4321 → `5511987654321`
- Rio de Janeiro (21) 99876-5432 → `5521998765432`
- Belo Horizonte (31) 97654-3210 → `5531976543210`

---

## 2. ALTERAR INFORMAÇÕES DA EMPRESA

**Arquivo:** `script.js` (linhas ~23-32)

```javascript
const CONFIG = {
    whatsappNumber: "5511999999999",
    telefonePrincipal: "(11) 99999-9999",        // AQUI
    enderecoEmpresa: "Rua Principal, 123 - São Paulo, SP",  // AQUI
    horarioAtendimento: "Seg-Sex: 08:00 às 18:00",  // AQUI
    anosAtividade: "3 anos",                    // AQUI
    areaAtendimento: "São Paulo Capital",       // AQUI
    regiaoDeEntrega: "São Paulo e região",      // AQUI
    instagramLink: "https://instagram.com/gasja",  // AQUI
    facebookLink: "https://facebook.com/gasja"     // AQUI
};
```

---

## 3. ALTERAR IMAGENS

**Arquivo:** `index.html`

### Hero (Seção Principal)
Linha ~77
```html
<img src="URL-AQUI" alt="Entrega de botijão de gás em casa">
```

### Produto P13
Linha ~104
```html
<img src="URL-AQUI" alt="Botijão de gás P13 - 13kg">
```

### Produto P20
Linha ~115
```html
<img src="URL-AQUI" alt="Botijão de gás P20 - 20kg">
```

### Produto P45
Linha ~126
```html
<img src="URL-AQUI" alt="Botijão de gás P45 - 45kg">
```

**Dica:** Use URLs de serviços como Unsplash, Pexels ou suas próprias imagens hospedadas.

---

## 4. ALTERAR CORES PRINCIPAIS

**Arquivo:** `style.css` (linhas ~10-22)

```css
:root {
    --laranja: #ff6b35;        /* CTA Principal - ALTERE AQUI */
    --laranja-escuro: #e55a2b; /* Hover CTA - ALTERE AQUI */
    --amarelo: #ffc107;        /* Detalhes - ALTERE AQUI */
}
```

**Cores Sugeridas:**

| Elemento | Cor Sugerida | Código |
|----------|-------------|--------|
| Laranja Primária | Laranja Vibrante | `#ff6b35` |
| Laranja Escuro | Laranja Escuro | `#e55a2b` |
| Amarelo Destaque | Amarelo Vibrante | `#ffc107` |

---

## 5. CUSTOMIZAR MENSAGENS DO WHATSAPP

**Arquivo:** `script.js`

Procure pelas funções:
- `initProdutoButtons()` - mensagens dos produtos (linhas ~68-82)
- `initHeroButton()` - hero principal (linhas ~85-90)
- `initHeaderButton()` - botão header (linhas ~93-99)
- `initDuvidaButton()` - não sabe qual escolher (linhas ~102-107)
- `initContatoButtons()` - contato (linhas ~110-122)
- `initCtaFinalButton()` - CTA final (linhas ~125-130)

**Exemplo - Alterar mensagem do P13:**

Encontre:
```javascript
data-mensagem="Olá! Gostaria de pedir um botijão P13. Poderia me informar o valor e a disponibilidade?"
```

Altere para:
```javascript
data-mensagem="Olá! Quero encomendar um P13 com entrega rápida"
```

---

## 6. ALTERAR TEXTOS DAS SEÇÕES

**Arquivo:** `index.html`

### Hero (Títulos e Descrição)
- Linhas ~67-73: Título, subtítulo, benefícios

### Produtos
- Linhas ~104-130: Nomes, descrições dos botijões

### FAQ
- Linhas ~269-314: Perguntas e respostas

### Sobre Nós
- Linhas ~202-204: Descrição da empresa

---

## 7. EDITAR MAPA

**Arquivo:** `index.html` (linha ~236)

Para trocar o mapa por seu endereço:

1. Vá para [Google Maps](https://maps.google.com)
2. Procure seu endereço
3. Clique no menu (≡) → "Compartilhar ou incorporar mapa" → "Incorporar um mapa"
4. Copie o `src` do iframe
5. Substitua o valor em `index.html` linha ~236

---

## 8. CHECKLIST DE LANÇAMENTO

- [ ] Número do WhatsApp configurado
- [ ] Telefone principal correto
- [ ] Endereço atualizado
- [ ] Horário de atendimento correto
- [ ] Imagens do hero e produtos
- [ ] Mapa atualizado
- [ ] Redes sociais linkadas (Instagram, Facebook)
- [ ] FAQ customizado com informações reais
- [ ] Sobre nós com descrição da empresa
- [ ] Cores personalizadas (opcional)
- [ ] Testado em celular
- [ ] Testado em desktop

---

## 9. MODO MANUTENÇÃO

Se precisar desabilitar temporariamente a página:

**Arquivo:** `index.html` - Adicione no início do `<body>`:

```html
<!-- BANNER DE MANUTENÇÃO (remova quando pronto) -->
<div style="background: #ff6b35; color: white; padding: 20px; text-align: center; font-weight: bold;">
    🔧 Estamos em manutenção. Volte em breve!
</div>
```

---

## 10. SUGESTÕES DE MELHORIAS

### Adicionar Analytics
No final de `script.js`, adicione:
```javascript
// Google Analytics (se tiver conta)
// Copie e cole seu código GA4 aqui
```

### Adicionar Formulário de Contato
Integre um serviço como Formspree, EmailJS ou Netlify Forms

### Adicionar Avaliações
Use Trustpilot, Google Reviews ou similares

### Chatbot
Integre um chatbot para responder automaticamente

---

## ❓ FAQ DO DESENVOLVEDOR

**P: Como adicionar mais produtos?**
R: Copie um card de produto e altere o nome, descrição e mensagem do WhatsApp.

**P: Como alterar o layout?**
R: Edite a grid em `style.css`. Procure por `grid-template-columns`.

**P: Como adicionar seções novas?**
R: Copie a estrutura de uma seção existente e customize no HTML, CSS e JS.

**P: Por que o menu mobile não abre?**
R: Verifique se o JavaScript está ativo. Procure erros no console (F12).

**P: Como hostar a página?**
R: Use Netlify, Vercel, GitHub Pages ou qualquer servidor web.

---

**Pronto!** Sua landing page está personalizada e pronta para vender! 🔥
