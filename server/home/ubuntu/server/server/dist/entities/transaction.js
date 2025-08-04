import { randomUUID } from "node:crypto";
export class Entity {
    id;
    createdAt;
    updatedAt;
    constructor(id, createdAt, updatedAt) {
        this.id = id || randomUUID();
        this.createdAt = createdAt || new Date();
        this.updatedAt = updatedAt || null;
    }
}
export class Category extends Entity {
    icon;
    name;
    constructor(name, icon, id, createdAt, updatedAt) {
        super(id, createdAt, updatedAt);
        this.icon = icon;
        this.name = name;
    }
}
export class Bank extends Entity {
    ispb;
    name;
    code;
    fullName;
    constructor(ispb, name, code, fullName, id, createdAt, updatedAt) {
        super(id, createdAt, updatedAt);
        this.ispb = ispb;
        this.name = name;
        this.code = code;
        this.fullName = fullName;
    }
}
export class Transaction extends Entity {
    description;
    type;
    amount;
    bank;
    category;
    date;
    constructor(description, type, amount, bank, category, date, id, createdAt, updatedAt) {
        super(id, createdAt, updatedAt);
        this.description = description;
        this.type = type;
        this.amount = amount;
        this.bank = bank;
        this.category = category;
        this.date = date;
    }
}
