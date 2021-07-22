export interface IDoughnutProps {
  className?: string;
  data:
    | {
        labels: string[];
        datasets: Record<string, any>[];
      }
    | {};
}
