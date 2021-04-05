export interface IEmployee {
  id?: number;
  name?: string;
  department?: string;
  salary?: number | null;
}

export class Employee implements IEmployee {
  constructor(public id?: number, public name?: string, public department?: string, public salary?: number | null) {}
}

export function getEmployeeIdentifier(employee: IEmployee): number | undefined {
  return employee.id;
}
