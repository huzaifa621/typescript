interface StudentData {
   name: string;
   science: number;
   maths: number;
   socialScience: number;
}

interface ResultData {
   name: string;
   avg: number;
}

const merge = (leftArr: ResultData[], rightArr: ResultData[]): ResultData[] => {
   let arr: ResultData[] = [];
   let i: number = 0;
   let j: number = 0;
   while (i < leftArr.length && j < rightArr.length) {
      if (leftArr[i].avg >= rightArr[j].avg) {
         arr.push(leftArr[i]);
         i++;
      } else {
         arr.push(rightArr[j]);
         j++;
      }
   }
   arr.push(
      ...leftArr.slice(i, leftArr.length),
      ...rightArr.slice(j, rightArr.length)
   );
   return arr;
};

const mergeSort = (arr: ResultData[]): ResultData[] => {
   if (arr.length <= 1) {
      return arr;
   }
   const mid: number = Math.floor(arr.length / 2);
   let leftArr: ResultData[] = arr.slice(0, mid);
   let rightArr: ResultData[] = arr.slice(mid, arr.length);
   leftArr = mergeSort(leftArr);
   rightArr = mergeSort(rightArr)
   return merge(leftArr, rightArr);
};

const data: StudentData[] = [
   { name: "Jack", science: 78, maths: 75, socialScience: 77 },
   { name: "Jimmy", science: 70, maths: 50, socialScience: 90 },
   { name: "Cloe", science: 90, maths: 90, socialScience: 90 },
];

let result: ResultData[] = [];

for (let student of data) {
   const avg: number =
      (student.maths + student.science + student.socialScience) / 3;
   const obj: ResultData = { name: student.name, avg: avg };
   result.push(obj);
}

console.log(mergeSort(result));
