import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

/* const collection = new NumbersCollection([10, 0, -8, 20, 3.167, 45, 12])
collection.sort();
console.log(collection.data); */

/* const charactersCollection = new CharactersCollection('NathaNielBabalolA')
charactersCollection.sort();
console.log(charactersCollection.data); */

const linkedList = new LinkedList();
linkedList.add(2100);
linkedList.add(5000);
linkedList.add(-50);
linkedList.add(-700)
linkedList.add(100);

linkedList.sort();
linkedList.print();