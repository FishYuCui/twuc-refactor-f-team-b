import Customer from "../Customer";
import Rental from "../Rental";
import RegularMovie from "../RegularMovie";
import NewReleaseMovie from "../NewReleaseMovie";
import ChildrenMovie from "../ChildrenMovie";

describe('Customer test', () => {
    test('should return statement given no rentals', () => {
        const customer = new Customer("tom");
        const expected = `Rental Record for tom\nAmount owed is 0\nYou earned 0 frequent renter points`;

        const result = customer.statement();

        expect(result).toBe(expected);
    });

    test('should return statement when rent regular movie', () => {
        const customer = new Customer("tom");
        const rental = new Rental(new RegularMovie("Green Book"), 1);
        customer.addRental(rental);
        const expected = `Rental Record for tom\n\tGreen Book\t2\nAmount owed is 2\nYou earned 1 frequent renter points`;

        const result = customer.statement();

        expect(result).toBe(expected);
    })

    test('should return statement when rent regular movie for more than 2 days', () => {
        const customer = new Customer("tom");
        const rental = new Rental(new RegularMovie("Green Book"), 3);
        customer.addRental(rental);
        const expected = `Rental Record for tom\n\tGreen Book\t3.5\nAmount owed is 3.5\nYou earned 1 frequent renter points`;

        const result = customer.statement();

        expect(result).toBe(expected);
    });

    test('should return statement when rent new release movie for more than 1 day', () => {
        const customer = new Customer("tom");
        const rental = new Rental(new NewReleaseMovie("Toy Story"), 3);
        customer.addRental(rental);
        const expected = `Rental Record for tom\n\tToy Story\t9\nAmount owed is 9\nYou earned 2 frequent renter points`;

        const result = customer.statement();

        expect(result).toBe(expected);
    });

    test('should return statement when rent new release movie for 1 day', () => {
        const customer = new Customer("tom");
        const rental = new Rental(new NewReleaseMovie("Toy Story"), 1);
        customer.addRental(rental);
        const expected = `Rental Record for tom\n\tToy Story\t3\nAmount owed is 3\nYou earned 1 frequent renter points`;

        const result = customer.statement();

        expect(result).toBe(expected);
    });

    test('should return statement when rent children movie for 1 day', () => {
        const customer = new Customer("tom");
        const rental = new Rental(new ChildrenMovie("Over the Hedge"), 1);
        customer.addRental(rental);
        const expected = `Rental Record for tom\n\tOver the Hedge\t1.5\nAmount owed is 1.5\nYou earned 1 frequent renter points`;

        const result = customer.statement();

        expect(result).toBe(expected);
    });

    test('should return statement when rent children movie for more than 3 days', () => {
        const customer = new Customer("tom");
        const rental = new Rental(new ChildrenMovie("Over the Hedge"), 5);
        customer.addRental(rental);
        const expected = `Rental Record for tom\n\tOver the Hedge\t4.5\nAmount owed is 4.5\nYou earned 1 frequent renter points`;

        const result = customer.statement();

        expect(result).toBe(expected);
    });

    test('should return statement when rent multiple movies', () => {
        const customer = new Customer("tom");
        customer.addRental(new Rental(new ChildrenMovie("Over the Hedge"), 5));
        customer.addRental(new Rental(new NewReleaseMovie("Toy Story"), 3));
        customer.addRental(new Rental(new RegularMovie("Green Book"), 3));
        const expected = `Rental Record for tom\n\tOver the Hedge\t4.5\n\tToy Story\t9\n\tGreen Book\t3.5\nAmount owed is 17\nYou earned 4 frequent renter points`;

        const result = customer.statement();

        expect(result).toBe(expected);
    });

    test('should return statement when rent new release movie for 5 days', () => {
        const customer = new Customer("tom");
        customer.addRental(new Rental(new NewReleaseMovie("Toy Story"), 5));
        const expected = `Rental Record for tom\n\tToy Story\t15\nAmount owed is 15\nYou earned 0 frequent renter points`;

        const result = customer.statement();

        expect(result).toBe(expected);
    });
})