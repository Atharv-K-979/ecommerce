const Add = ({ a, b }) => {
    const result = Number(a) + Number(b);
    return (
        <p>
            {a} + {b} = {result}
        </p>
    );
};

export default Add;
