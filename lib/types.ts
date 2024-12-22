export interface RequestItem {
  item_id: number; // ID unik untuk item
  quantity: number; // Jumlah item yang diminta
}

export interface Request {
  id: number; // ID permintaan
  status: "reject" | "confirm" | "pending";
  name: string; // Nama permintaan
  department: string; // Departemen terkait
  mrf: number; // Nomor referensi material (MRF)
  due_date: string; // Tanggal jatuh tempo (ISO format, e.g., "2025-01-15")
  create_at: Date; // Tanggal pembuatan (ISO format, e.g., "2024-12-10")
  items: RequestItem[]; // Daftar item dalam permintaan
}

export interface Item {
  id: number;
  image: string;
  name: string;
  quantity: number;
  create_at: Date;
}
