import express from "express";
import { Bank, Category, Transaction } from "./entities/transaction";

const app = express();
app.use(express.json());

// In-memory storage
const banks: Bank[] = [];
const categories: Category[] = [];
const transactions: Transaction[] = [];

// --- BANK CRUD ---

// List all banks
app.get("/banks", (req, res) => {
  res.json(banks);
});

// Get bank by id (query param)
app.get("/bank", (req, res) => {
  const { id } = req.query;
  const bank = banks.find(b => b.id === id);
  if (!bank) return res.status(404).json({ error: "Bank not found" });
  res.json(bank);
});

// Create bank
app.post("/bank", (req, res) => {
  const { ispb, name, code, fullName } = req.body;
  if (!ispb || !name || !code || !fullName) return res.status(400).json({ error: "Missing fields" });
  const bank = new Bank(ispb, name, code, fullName);
  banks.push(bank);
  res.status(201).json(bank);
});

// Update bank
app.put("/bank", (req, res) => {
  const { id } = req.query;
  const bank = banks.find(b => b.id === id);
  if (!bank) return res.status(404).json({ error: "Bank not found" });
  const { ispb, name, code, fullName } = req.body;
  if (ispb) bank.ispb = ispb;
  if (name) bank.name = name;
  if (code) bank.code = code;
  if (fullName) bank.fullName = fullName;
  bank.updatedAt = new Date();
  res.json(bank);
});

// Delete bank
app.delete("/bank", (req, res) => {
  const { id } = req.query;
  const idx = banks.findIndex(b => b.id === id);
  if (idx === -1) return res.status(404).json({ error: "Bank not found" });
  banks.splice(idx, 1);
  res.status(204).send();
});

// --- CATEGORY CRUD ---

// List all categories
app.get("/categories", (req, res) => {
  res.json(categories);
});

// Get category by id (query param)
app.get("/category", (req, res) => {
  const { id } = req.query;
  const category = categories.find(c => c.id === id);
  if (!category) return res.status(404).json({ error: "Category not found" });
  res.json(category);
});

// Create category
app.post("/category", (req, res) => {
  const { name, icon } = req.body;
  if (!name) return res.status(400).json({ error: "Missing name" });
  const category = new Category(name, icon);
  categories.push(category);
  res.status(201).json(category);
});

// Update category
app.put("/category", (req, res) => {
  const { id } = req.query;
  const category = categories.find(c => c.id === id);
  if (!category) return res.status(404).json({ error: "Category not found" });
  const { name, icon } = req.body;
  if (name) category.name = name;
  if (icon !== undefined) category.icon = icon;
  category.updatedAt = new Date();
  res.json(category);
});

// Delete category
app.delete("/category", (req, res) => {
  const { id } = req.query;
  const idx = categories.findIndex(c => c.id === id);
  if (idx === -1) return res.status(404).json({ error: "Category not found" });
  categories.splice(idx, 1);
  res.status(204).send();
});

// --- TRANSACTION CRUD ---

// List all transactions
app.get("/transactions", (req, res) => {
  res.json(transactions);
});

// Get transaction by id (query param)
app.get("/transaction", (req, res) => {
  const { id } = req.query;
  const transaction = transactions.find(t => t.id === id);
  if (!transaction) return res.status(404).json({ error: "Transaction not found" });
  res.json(transaction);
});

// Create transaction
app.post("/transaction", (req, res) => {
  const { description, type, amount, bankId, categoryId, date } = req.body;
  if (!description || !type || !amount || !bankId || !categoryId || !date) {
    return res.status(400).json({ error: "Missing fields" });
  }
  const bank = banks.find(b => b.id === bankId);
  const category = categories.find(c => c.id === categoryId);
  if (!bank) return res.status(400).json({ error: "Invalid bankId" });
  if (!category) return res.status(400).json({ error: "Invalid categoryId" });
  const transaction = new Transaction(
    description,
    type,
    amount,
    bank,
    category,
    new Date(date)
  );
  transactions.push(transaction);
  res.status(201).json(transaction);
});

// Update transaction
app.put("/transaction", (req, res) => {
  const { id } = req.query;
  const transaction = transactions.find(t => t.id === id);
  if (!transaction) return res.status(404).json({ error: "Transaction not found" });
  const { description, type, amount, bankId, categoryId, date } = req.body;
  if (description) transaction.description = description;
  if (type) transaction.type = type;
  if (amount) transaction.amount = amount;
  if (bankId) {
    const bank = banks.find(b => b.id === bankId);
    if (!bank) return res.status(400).json({ error: "Invalid bankId" });
    transaction.bank = bank;
  }
  if (categoryId) {
    const category = categories.find(c => c.id === categoryId);
    if (!category) return res.status(400).json({ error: "Invalid categoryId" });
    transaction.category = category;
  }
  if (date) transaction.date = new Date(date);
  transaction.updatedAt = new Date();
  res.json(transaction);
});

// Delete transaction
app.delete("/transaction", (req, res) => {
  const { id } = req.query;
  const idx = transactions.findIndex(t => t.id === id);
  if (idx === -1) return res.status(404).json({ error: "Transaction not found" });
  transactions.splice(idx, 1);
  res.status(204).send();
});

// --- SERVER START ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
  {
    "id": "14e5f6g7-h890-1234-5678-901234efghij",
    "description": "Consulta Médica",
    "type": "expense",
    "amount": 300.0,
    "bank": "Caixa Econômica",
    "category": {
      "icon": "Stethoscope",
      "name": "Saúde"
    },
    "date": "2023-10-15T09:00:00Z"
  },
  {
    "id": "15f6g7h8-i901-2345-6789-012345fghijk",
    "description": "Curso Online",
    "type": "expense",
    "amount": 500.0,
    "bank": "Banco do Brasil",
    "category": {
      "icon": "Laptop",
      "name": "Educação"
    },
    "date": "2023-10-16T18:00:00Z"
  },
  {
    "id": "16g7h8i9-j012-3456-7890-123456ghijkl",
    "description": "Manutenção do Carro",
    "type": "expense",
    "amount": 800.0,
    "bank": "Itaú",
    "category": {
      "icon": "Wrench",
      "name": "Transporte"
    },
    "date": "2023-10-17T15:00:00Z"
  },
  {
    "id": "17h8i9j0-k123-4567-8901-234567hijklm",
    "description": "Assinatura Netflix",
    "type": "expense",
    "amount": 45.0,
    "bank": "Santander",
    "category": {
      "icon": "Tv",
      "name": "Lazer"
    },
    "date": "2023-10-18T20:00:00Z"
  },
  {
    "id": "18i9j0k1-l234-5678-9012-345678ijklmn",
    "description": "Compra de Roupas",
    "type": "expense",
    "amount": 300.0,
    "bank": "Nubank",
    "category": {
      "icon": "Shirt",
      "name": "Vestuário"
    },
    "date": "2023-10-19T16:00:00Z"
  },
  {
    "id": "19j0k1l2-m345-6789-0123-456789jklmno",
    "description": "Conta de Água",
    "type": "expense",
    "amount": 80.0,
    "bank": "Caixa Econômica",
    "category": {
      "icon": "Droplet",
      "name": "Utilidades"
    },
    "date": "2023-10-20T11:00:00Z"
  }
]

let categories: Category[] = []

// Declare a route
fastify.get(`/transactions`, async function handler(request, reply) {
  return { transactions }
})

// categories
fastify.post('/categories', async function handler(request, reply) {
  const { name, icon } = request.body as { name: string, icon?: string }

  const category = new Category(name, icon)
  categories.push(category)

  return reply.send(category)
})

fastify.get('/categories', async function handler(request, reply) {
  
  return reply.send(categories)
})

fastify.patch(`/categories/:id`, async function handler(request, reply) {
  const { id } = request.params as { id: string }
  const {name , icon} = request.body as { name?: string, icon?: string }

  const categoryFinded = categories.find(category => category.id === id)
  if (!categoryFinded) {
    return reply.status(404).send({ error: 'Category not found' })
  }

  const categoryIndex = categories.findIndex(category => category.id === id)
  categories[categoryIndex] = {
    ...categoryFinded,
    name: name ?? categoryFinded.name,
    icon: icon ?? categoryFinded.icon,
  }

  return reply.send(categories[categoryIndex])
})


// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
