import { Pool } from 'pg';

const connectionString = 'postgres://gprqoaag:hE-jeLx-MdBvNmkasIpQLoItZN-vJbE8@kesavan.db.elephantsql.com/gprqoaag';

const db = new Pool({connectionString});

export default db;