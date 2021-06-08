interface Sortable {
    length: number;
    // the name of the arguments in this interface doesn't have to match the  names in the implementation
    compare(leftIndex: number, righIndex: number): boolean;
    swap(leftIndex: number, righIndex: number): void;
}
export abstract class Sorter {
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;
    abstract length: number;

    sort(): void {
        const { length } = this;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }

    }
}