export interface ReduplicationReportRequest {
  url: string;
}

export interface ModificationReportRequest {
  image: string;
  category: number;
  title: string;
  from: string;
}

export interface DeletionReportRequest {
  reason: string;
}
