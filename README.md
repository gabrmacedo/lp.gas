# 🔥 Gás Já — Landing Page Profissional

Uma landing page comercial, profissional e focada em conversão para venda e entrega de botijões de gás.

## ⚡ Como Customizar

### 1️⃣ Dados da Empresa (Script.js)

Abra o arquivo `script.js` e procure pela seção **"CONFIGURAÇÕES - EDITE AQUI COM OS DADOS DA EMPRESA"**:

```javascript
const CONFIG = {
    whatsappNumber: "5511999999999", // Seu número de WhatsApp (55 + DDD + número)
    telefonePrincipal: "(11) 99999-9999",
    enderecoEmpresa: "Rua Principal, 123 - São Paulo, SP",
    horarioAtendimento: "Seg-Sex: 08:00 às 18:00 | Sábado: 08:00 às 12:00",
    anosAtividade: "3 anos",
    areaAtendimento: "São Paulo Capital e Grande São Paulo",
    regiaoDeEntrega: "Atendemos São Paulo Capital, Grande São Paulo...",
    instagramLink: "https://instagram.com/gasja",
    facebookLink: "https://facebook.com/gasja"
};
```

**Edite:**
- `whatsappNumber`: Seu número do WhatsApp (formato: 55 + DDD + número, apenas dígitos)
- `telefonePrincipal`: Seu telefone
- `enderecoEmpresa`: Seu endereço completo
- `horarioAtendimento`: Horário de funcionamento
- `anosAtividade`: Tempo de mercado (ex: "5 anos", "desde 2020")
- `areaAtendimento`: Área de cobertura
- `regiaoDeEntrega`: Regiões atendidas (será exibido no FAQ)
- `instagramLink`: Seu perfil do Instagram
- `facebookLink`: Sua página do Facebook

### 2️⃣ Imagens

As imagens estão usando URLs públicas do Unsplash. Para usar suas próprias imagens:

1. No **index.html**, procure por tags `<img>` e substitua o `src`:

```html
<!-- HERO -->
<img src="https://sua-url-de-imagem.com/botijao.jpg" alt="...">

<!-- PRODUTOS -->
<img src="https://sua-url-de-imagem.com/p13.jpg" alt="Botijão P13">
<img src="https://sua-url-de-imagem.com/p20.jpg" alt="Botijão P20">
<img src="https://sua-url-de-imagem.com/p45.jpg" alt="Botijão P45">
```

### 3️⃣ Textos e Conteúdo

Você pode editar qualquer texto diretamente no **index.html**:

- **Hero**: Títulos, subtítulos e benefícios
- **Produtos**: Descrições dos botijões P13, P20, P45
- **FAQ**: Perguntas e respostas
- **Sobre nós**: Descrição da empresa
- **Footer**: Links e informações

### 4️⃣ Cores

Se quiser mudar as cores, abra o **style.css** e procure por:

```css
:root {
    --preto: #1a1a1a;
    --grafite: #2d2d2d;
    --branco: #ffffff;
    --laranja: #ff6b35;        /* CTA Principal */
    --laranja-escuro: #e55a2b;
    --amarelo: #ffc107;        /* Detalhes */
    --cinza-claro: #f0f0f0;
    --cinza-medio: #666666;
    --cinza-escuro: #333333;
}
```

## 🎯 Estrutura da Página

```
Header Fixo
│
├── Hero (PEDIR GÁS AGORA)
│
├── Produtos
│   ├── P13 (Destaque)
│   ├── P20
│   └── P45
│
├── Não sabe qual escolher?
│
├── Como funciona (3 etapas)
│
├── Sobre nós
│
├── Área de atendimento (com mapa)
│
├── Contato
│
├── FAQ (Accordion)
│
├── CTA Final (PEDIR GÁS AGORA)
│
└── Footer

Elementos Flutuantes:
├── Botão WhatsApp (fixo no canto)
└── Barra CTA Mobile (fixo inferior)
```

## 💡 Funcionalidades

✅ **Header Fixo** com menu navegável
✅ **Menu Hamburger** responsivo para mobile
✅ **3 Cards de Produtos** com badges de destaque
✅ **FAQ com Accordion** em JavaScript puro
✅ **Botão WhatsApp Flutuante** com animação de pulso
✅ **Barra CTA Fixa** no mobile
✅ **Mapa Google Maps** integrado
✅ **Todas as CTAs** levam ao WhatsApp com mensagens customizadas
✅ **Design Mobile First** 100% responsivo
✅ **SEO Otimizado** com tags semânticas

## 🚀 Fluxo de Conversão

A página guia o visitante para o pedido pelo WhatsApp:

1. **Hero** → "Pedir Gás Agora"
2. **Produtos** → Escolher botijão
3. **Como Funciona** → Entender o processo
4. **Contato** → Informações e WhatsApp
5. **CTA Final** → Último estímulo para pedido
6. **Botão Flutuante** → Sempre acessível

## 📱 Responsividade

- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (até 768px)

## 📊 SEO Básico

A página inclui:
- Meta tags descritivas
- H1 único
- Schema.org LocalBusiness
- Open Graph
- ALT em todas as imagens

Para melhorar ainda mais o SEO:
1. Registre o site no Google Search Console
2. Crie um sitemap.xml
3. Envie para diretórios locais
4. Obtenha backlinks de sites locais

## 🔧 Tecnologia

- HTML5
- CSS3 (sem frameworks)
- JavaScript Puro (sem bibliotecas)
- Sem dependências externas

## 📝 Checklist de Customização

- [ ] WhatsApp Number (script.js)
- [ ] Telefone Principal
- [ ] Endereço da Empresa
- [ ] Horário de Atendimento
- [ ] Anos de Atividade
- [ ] Região de Entrega
- [ ] Links Instagram e Facebook
- [ ] Imagens dos Botijões
- [ ] Imagem Hero
- [ ] Descrições dos Produtos
- [ ] FAQ respostas customizadas
- [ ] Sobre nós texto
- [ ] Cores (opcional)

## 💬 Suporte

Todas as informações podem ser facilmente editadas sem conhecimento técnico avançado. Se tiver dúvidas, consulte o código comentado em:

- **script.js** → CONFIG e inicializações
- **index.html** → Estrutura e conteúdo
- **style.css** → Variáveis CSS e classes

---

**Dica:** Teste a página em diferentes dispositivos antes de publicar!
