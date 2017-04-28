/**
 * Created by suzanne on 4/27/17.
 */
let x = 6545
let y = 9712
multiply(x, y)


function multiply(x,y) {

  let n = (''+x).length
  let m = (''+y).length

  if (n===1 || m===1) {
    console.log(x*y)
    return x*y
  }

  let a = x.toString().split("").slice(0,parseInt(n/2)).join("")
  let b = x.toString().split("").slice(parseInt(n/2), n).join("")

  let c = y.toString().split("").slice(0,parseInt(m/2)).join("")
  let d = y.toString().split("").slice(parseInt(m/2), m).join("")

//console.log(a,b,c,d)

  let ac = multiply(a,c)
//console.log("AC: ", ac)
  let bd = multiply(b,d)
//console.log("BD: ", bd)
  let ad_bc = multiply(a,d) + multiply(b,c)
//console.log("AD+BC", ad_bc)

  console.log("xy = " +  ac*(10**n) + " + " + ad_bc*(10**(n/2)) + " + " + bd )
  c

  let xy = ac*(10**n) + (10**(n/2))*ad_bc + bd
  console.log(xy)
  return xy


}
