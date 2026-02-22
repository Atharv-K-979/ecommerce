const Divide = ({ a, b }) => {
    const numA = Number(a);
    const numB = Number(b);
    const result = numB === 0 ? 'Cannot divide by zero' : numA / numB;
    return (
        <p>
            {a} ÷ {b} = {result}
        </p>
    );
};

export default Divide;
