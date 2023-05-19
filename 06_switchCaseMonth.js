

function monthOfYear(monthNum){
    switch (monthNum){
        case 1:
            console.log(`Month is:${monthNum}. January is the first Month `);
            break;
            case 2:
                console.log(`Month is:${monthNum}. February is the Second month`);
                break;
                case 5:
                    console.log(`Month is:${monthNum}.May is the fifth Month `);
                    break;
                    case 12:
                        console.log(`Month is:${monthNum}. December is the Last Month `);
                        break;
                        case 15:
                            console.log(`Month NO: ${monthNum} Invalid Input Data`);
                            break;
                            case 100:
                            console.log(`Month NO:${monthNum} Invalid Input Data`);
                            break;
                            break;

        default:
            console.log(`Invalid Input=> ${monthNum}`);
            break;
    }

}
monthOfYear(1);
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);
