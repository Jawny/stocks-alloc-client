export interface IDoughnutProps {
  data:
    | {
        labels: string[];
        datasets: Record<string, any>[];
      }
    | {};
}
