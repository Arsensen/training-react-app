console.log(this)

const func =(dis)=> (dispatch)=> {
    console.log(this)
}

func(1)(2)