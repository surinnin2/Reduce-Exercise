function extractValue(arr, key) {
    let arrayToReturn = arr.reduce(function(obj, nextobj) {
        obj.push(nextobj[key])
        return obj
    }, [])
    return arrayToReturn
}

function vowelCount(str) {
    let newstr = str.toLowerCase()
    let objToReturn = Array.from(newstr).reduce(function(obj, nextLetter) {
      console.log(obj)  
      if ('aeiou'.indexOf(nextLetter) !== -1) {
            obj[nextLetter] = obj[nextLetter]+1 || 1
        }
        return obj 
    }, {})
    return objToReturn
}

function addKeyAndValue(arr, key, value) {
    let arrToReturn = arr.reduce(function(arr, nextobj) {
        nextobj[key] = value
      arr.push(nextobj)
      return arr
    }, [])
  return arrToReturn
}

function partition(arr, callback) {
    let arrToReturn = arr.reduce(function(arr, nextvalue) {
        
        if (callback(nextvalue)) {
            arr[0].push(nextvalue)
        } else {
            arr[1].push(nextvalue)
        }
        return arr
    }, [[],[]])
    return arrToReturn
}
