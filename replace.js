function rep(str)
{
    let result = "";
    for(i of str)
    {
        if (!isNaN(i))
        {
             result += "!"
        }
        else
        {
            result += i
        }
    }
    return result
}
console.log(rep("bekal 24534"))