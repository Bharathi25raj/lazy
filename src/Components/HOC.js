const styles = {
    dark: {
        background: 'black',
        color: 'white'
    },

    yellow: {
        background: 'yellow',
        color: 'red'
    }
}


export default function HOC(WrappedComp){
    return function(args){
        let temp = {};
        if(args.yellow){
            temp = {...styles.yellow}
        } else if(args.dark){
            temp = {...styles.dark}
        }
        return <WrappedComp style={temp}/>
    }
}