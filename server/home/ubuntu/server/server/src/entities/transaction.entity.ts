export interface CreateTransactionDTO {
  description?: string;
  amount: number;
  type: string;
  date: Date;
  categoryId?: number;
  bankId?: number;
}


