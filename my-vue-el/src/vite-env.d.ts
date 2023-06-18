declare namespace NodeJS {
    interface Process {
        env: {
            readonly NODE_ENV: 'development' | 'production';
            readonly buildTime: string;
            readonly [key: string]: any;
        }
    }
}
