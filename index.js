const s = 'valay'

const countChar = (ss) => {
  let obj = {}

  let temp = ss.split('')

  temp.map((s) => {
    if(obj[s]){
      obj[s] += 1
    }else{
      obj[s] = 1
    }
  })

  console.log('ans --- ', ss, obj);
}

countChar(s)