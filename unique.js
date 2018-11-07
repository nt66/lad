let arr = [1, 5, 3, 12, 333, 12, 5, 333, 'a', 3, 'b', 'a'];

/**方法一 indexOf */
Array.prototype.uniqueIndexOf = function () {
  const newArray = [];
  this.forEach((item, index) => {
    if (newArray.indexOf(item) === -1)
      newArray.push(item)
  });
  return newArray;
}

/**方法二 Set*/
Array.prototype.uniqueSet = function () {
  const set = new Set(this);
  return Array.from(set);
}

/**方法三 includes*/
Array.prototype.uniqueIncludes = function () {
  const newAry = [];
  this.forEach((item, index) => {
    if (!newAry.includes(item))
      newAry.push(item);
  });
  return newAry;
}

/**方法四 sort */
Array.prototype.uniqueSort = function () {
  const newArray = [];
  this.sort();
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== this[i + 1])
      newArray.push(this[i])
  }
  return newArray;
}

/**方法五 reduce */
Array.prototype.uniqueReduce = function () {
  return this.sort().reduce((init, cur) => {
    if (init.length === 0 || init[init.length-1] !== cur) {
      init.push(cur);
    }
    return init;
  },[]);
}

/**方法六 键值对 */
Array.prototype.uniqueKey = function () {
  const newArray = [];
  const tmp = {};
  this.forEach((item)=>{
    var key = typeof item + item;
    if(!tmp[key]){
      tmp
    }
  });
  // for (let i = 0; i < this.length; i++) {
  //   if (!tmp[typeof this[i] + this[i]]) {
  //     tmp[typeof this[i] + this[i]] = true;
  //     newArray.push(this[i]);
  //   }
  // }
  return newArray;
}

/**方法七 Map */
Array.prototype.uniqueMap = function () {
  const newArray = [];
  const tmp = new Map();
  for(let i = 0; i < this.length; i++){
        if(!tmp.get(this[i])){
            tmp.set(this[i], 1);
            newArray.push(this[i]);
        }
    }
    console.log(tmp.size)
    return newArray;
}


console.log('newAry:', arr.uniqueMap());

// console.time('uniqueIndexOf~~');
// arr.uniqueIndexOf();
// console.timeEnd('uniqueIndexOf~~');


