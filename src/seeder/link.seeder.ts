import {createConnection, getRepository} from "typeorm";
import * as faker from "faker";
import {randomInt} from "crypto";
import {Link} from "../entity/link.entity";

createConnection().then(async () => {
    const repository = getRepository(Link);

    for (let i = 0; i < 30; i++) {
        const user_id = i + 1;

        await repository.save({
            code: faker.random.alphaNumeric(6),
            user_id,
            price: [randomInt(1, 30)]
        });
    }

    process.exit();
});
