import './Counter.css'

type CounterProps = {
    value: number
    click: (value: number) => void
}



export const Counter: React.FC<CounterProps> = ({ click, value }) => {

    console.log(value)

    return <>
        <button className="button" onClick={() => click(value + 1)}>Click</button>

    </>

}