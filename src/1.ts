interface ITotalPriceParams {
    price: number;
    discount: number;
    isInstallment: boolean;
    months: number;
}

const totalPrice = ({ price, discount, isInstallment, months }: ITotalPriceParams): number => {
    if (price < 0) {
        throw new Error('Price must be a positive number');
    }

    if (discount < 0 || discount > 100) {
        throw new Error('Discount must be a number between 0 and 100.');
    }

    const isInteger = (num: number): boolean => num % 1 === 0;

    if (isInstallment && (months <= 0 || !isInteger(months))) {
        throw new Error('Months must be a positive integer when installment is enabled.');
    }

    const discountedPrice = discount ? price * (1 - discount / 100) : price;
    
    if (isInstallment) {
        return discountedPrice / months;
    }
    
    return discountedPrice;
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price);