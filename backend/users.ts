export class User {
    constructor(
        public email: string,
        public name: string,
        private password: string
    ) {}

    matches(another: User): boolean {
        return ( another !== undefined ) && ( another.email === this.email ) && ( another.password === this.password )
    }
}

export const users: { [ key: string ]: User } = {
    'thiago@gmail.com':   new User('thiago@gmail.com', 'Thiago', 'thiago123'),
    'thalita@gmail.com':  new User('thalita@gmail.com', 'Thalita', 'thalita123'),
    'caroline@gmail.com': new User('caroline@gmail.com', 'Caroline', 'caroline123')
}
