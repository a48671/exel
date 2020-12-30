console.log('module')

const fun = async () => {
    const result = await Promise.resolve('promise work');
    console.log(result)
}

fun()
