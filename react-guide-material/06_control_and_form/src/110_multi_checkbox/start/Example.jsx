import { useState } from "react";

// POINT 複数チェックボックスの実装
const Example = () => {
  const [fruits, setFruits] = useState([
    { label: "Apple", value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
  ]);
  const [sum, setSum] = useState(0);

  const handleChange = (e) => {
    //チェックボックスが変わったときに呼び出されるコールバック関数
    const newFruits = fruits.map((fruit) => {
      //newFruitsとしてfruitsをコピーし、展開
      const newFruit = { ...fruit };
      if (newFruit.label === e.target.value) {
        //newFruitのlabelが対象のチェックボックスのvalueと一致するとき
        newFruit.checked = !fruit.checked; //newFruitsのcheckedをtrueに変更（trueの場合はfalseに変更）
      }
      return newFruit; // newFruitを返す
    });
    setFruits(newFruits); //newFruitでfruitsを更新

    // let sumVal = 0;
    // newFruits.forEach((fruit) => {
    //   if (fruit.checked) {
    //     sumVal += fruit.value;
    //   }
    // });
    // setSum(sumVal);
    let sumVal = 0;
    newFruits
      .filter((fruit) => fruit.checked)
      .forEach((fruit) => (sumVal += fruit.value));
    setSum(sumVal);
  };
  return (
    <div>
      {fruits.map((fruit) => {
        return (
          <div key={fruit.label}>
            <input
              type="checkbox"
              id={fruit.label}
              value={fruit.label}
              checked={fruit.checked}
              onChange={handleChange}
            />
            <label htmlFor={fruit.label}>
              {fruit.label}:{fruit.value}
            </label>
          </div>
        );
      })}
      <div>合計：{sum}</div>
    </div>
  );
  // const handleChange = (e) => {
  //   const newFruits = fruits.map((fruit) => {
  //     const newFruit = { ...fruit };
  //     if (fruit.label === e.target.value) {
  //       fruit.checked = !fruit.checked;
  //     }
  //     return fruit;
  //   });

  //   setFruits(newFruits);

  //   let sumVal = 0;
  //   // newFruits.forEach((fruit) => {
  //   //   if (fruit.checked) {
  //   //     sumVal += fruit.value;
  //   //   }
  //   // });
  //   newFruits
  //     .filter((fruit) => fruit.checked)
  //     .forEach((fruit) => (sumVal += fruit.value));
  //   setSum(sumVal);
  // };
  // // const handleChange = () => {
  // //   return setSum(
  // //     fruits.map((fruit) => {
  // //       return sum + fruit.value;
  // //     })
  // //   );
  // // };

  // return (
  //   <div>
  //     {fruits.map((fruit) => {
  //       return (
  //         <div key={fruit.label}>
  //           <input
  //             id={fruit.label}
  //             type="checkbox"
  //             value={fruit.label}
  //             checked={fruit.checked}
  //             onChange={handleChange}
  //           />
  //           <label htmlFor={fruit.label}>
  //             {fruit.label}:{fruit.value}
  //           </label>
  //         </div>
  //       );
  //     })}
  //     <div>合計：{sum}</div>
  //   </div>
  // );

  // return (
  //   <div>
  //     {fruits.map((fruit) => {
  //       return;
  //     })}
  //   </div>
  // );

  //   const handleChange = (e) => {
  //     const newFruits = fruits.map((fruit) => {
  //       const newFruit = { ...fruit };
  //       if (newFruit.label === e.target.value) {
  //         newFruit.checked = !fruit.checked;
  //       }

  //       return newFruit;
  //     });

  //     setFruits(newFruits);
  //     // forEachバージョン
  //     // let sumVal = 0;
  //     // newFruits.forEach(fruit => {
  //     //   if(fruit.checked) {
  //     //     sumVal = sumVal + fruit.value;
  //     //   }
  //     // });

  //     // filter + forEachバージョン
  //     // let sumVal = 0;
  //     // newFruits
  //     //   .filter((fruit) => fruit.checked)
  //     //   .forEach((fruit) => (sumVal = sumVal + fruit.value));

  //     // filter + reduceバージョン
  //     let sumVal = newFruits
  //       .filter((fruit) => fruit.checked)
  //       .reduce((sumVal, fruit) => sumVal + fruit.value, 0);
  //     setSum(sumVal);
  //   };
  //   return (
  //     <div>
  //       {fruits.map((fruit) => {
  //         return (
  //           <div key={fruit.label}>
  //             <input
  //               id={fruit.label}
  //               type="checkbox"
  //               value={fruit.label}
  //               checked={fruit.checked}
  //               onChange={handleChange}
  //             />
  //             <label htmlFor={fruit.label}>
  //               {fruit.label}:{fruit.value}
  //             </label>
  //           </div>
  //         );
  //       })}
  //       <div>合計：{sum}</div>
  //     </div>
  //   );
};

export default Example;
