import React, { Component } from 'react'
export default class fillteroddeven extends Component {
    oddArr = [];
    evenArr = [];
    radomListNum = [];
    constructor(props) {
        super(props);
        this.filterOdd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        this.filterEven(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        this.generateRandom(7);
    }
    filterOdd(...arr) {
        for (let i of arr) {
            if (Number(i) % 2 !== 0) {
                this.oddArr.push(Number(i))
            }
        }
        console.log(this.oddArr);
    }
    filterEven(...arr) {
        for (let i of arr) {
            if (Number(i) % 2 === 0) {
                this.evenArr.push(i)
            }
        }
        console.log(this.evenArr);
    }
    generateRandom(n) {
        for (let i = 0; i < n; i++) {
            this.radomListNum.push(Math.floor(Math.random() * 101));
        }
        console.log(this.radomListNum);
    }
    render() {
        return (
            <div>
                <div>
                    <ul> odd numbers{this.oddArr.map(number => <li>{number}</li>)}</ul>
                </div>
                <div>
                    <ul> even numbers{this.evenArr.map(number => <li>{number}</li>)}</ul>
                </div>
                <div>
                    <ul> random numbers{this.radomListNum.map(number => <li>{number}</li>)}</ul>
                </div>
            </div>
        )
    }
}
