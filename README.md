# 🚘 Lençóis Veículos — Site de Anúncio de Veículos

Site estático em **HTML + CSS + JS puro**, estilo editorial de luxo.
Toda manutenção de estoque é feita editando apenas `data/veiculos.json`.

---

## 📁 Estrutura

```
lencois-veiculos/
│
├── index.html          → Home (hero split, lista editorial, busca)
├── carros.html         → Estoque completo + filtros
├── veiculo.html        → Página individual do veículo
├── contato.html        → Contato, mapa e horários
│
├── css/style.css       → Estilo completo
├── js/
│   ├── utils.js        → Funções compartilhadas
│   └── components.js   → Header e Footer
│
├── data/veiculos.json  → ⭐ Gerencie o estoque aqui
│
└── imgs/
    ├── imgs-home/      → Imagens do slider (slide1.jpg, slide2.jpg, slide3.jpg)
    └── imgs-carros/    → Uma pasta por veículo com as fotos
```

---

## ✏️ Gerenciar Estoque — veiculos.json

### Adicionar veículo
```json
{
  "id": "009",
  "ano": 2023,
  "nome": "Polo Track 1.0",
  "marca": "Volkswagen",
  "preco": 79900,
  "cambio": "Manual",
  "km": 8000,
  "combustivel": "Flex",
  "tipo": "Carro",
  "galeria": [
    "imgs/imgs-carros/polo/foto1.jpg",
    "imgs/imgs-carros/polo/foto2.jpg"
  ],
  "link": "https://wa.me/5514999999999?text=Olá!%20Tenho%20interesse%20no%20Polo%20Track%202023."
}
```

| Campo        | Tipo   | Valores aceitos                        |
|-------------|--------|----------------------------------------|
| `id`        | string | Único — use "001", "002"...            |
| `ano`       | number | `2022`                                 |
| `nome`      | string | `"Polo Track 1.0"`                     |
| `marca`     | string | `"Volkswagen"`                         |
| `preco`     | number | `79900` (sem R$ ou pontos)             |
| `cambio`    | string | `"Manual"` ou `"Automático"`           |
| `km`        | number | `8000`                                 |
| `combustivel`| string| `"Flex"`, `"Gasolina"` ou `"Diesel"`  |
| `tipo`      | string | **Exatamente** `"Carro"` ou `"Moto"`  |
| `galeria`   | array  | Mínimo 1 imagem                        |
| `link`      | string | Link WhatsApp com mensagem codificada  |

### Remover veículo
Apague o objeto inteiro do array JSON.

---

## 🖼 Imagens

### Slider (Home)
Coloque em `imgs/imgs-home/`:
- `slide1.jpg` / `slide1.svg`
- `slide2.jpg` / `slide2.svg`
- `slide3.jpg` / `slide3.svg`

Tamanho recomendado: **1920×900px**

Para trocar as imagens, edite as tags `<img src="...">` nas divs `.hero-slide` dentro de `index.html`.

### Fotos dos veículos
Crie uma subpasta por veículo em `imgs/imgs-carros/`:
```
imgs/imgs-carros/polo/foto1.jpg
imgs/imgs-carros/polo/foto2.jpg
```
O caminho deve bater exatamente com o que está no `galeria[]` do JSON.

---

## 📱 Gerar link WhatsApp

```
https://wa.me/55DDDNUMERO?text=MENSAGEM_CODIFICADA
```

Codifique a mensagem em [urlencoder.org](https://www.urlencoder.org/) e substitua.

---

## ⚙️ Personalizar empresa

Edite `js/components.js`:
- Nome, telefone, e-mail, endereço
- Link do Instagram e WhatsApp

Edite `contato.html`:
- Array `horarios[]` com os dias e horários de atendimento

---

## 🌐 Publicação

Site **100% estático** — hospede em qualquer lugar:
- **Netlify Drop**: arraste a pasta em [app.netlify.com/drop](https://app.netlify.com/drop)
- **Hostinger / Locaweb**: suba via FTP
- **GitHub Pages**: repositório público + Pages ativo

> Para testar localmente use **VS Code + extensão Live Server**.
> Abrir direto o `.html` no navegador não carregará o JSON.

---

© 2024 Lençóis Veículos — Lençóis Paulista, SP
