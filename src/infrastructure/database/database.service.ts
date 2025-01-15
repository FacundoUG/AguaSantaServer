import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';


@Injectable()
export class DatabaseService {
    constructor(private dataSource: DataSource){}

    async checkConnection(): Promise<void> {
        try {
            if (!this.dataSource.isInitialized) {
                await this.dataSource.initialize();
                console.log('✅ Database connected successfully');
            } else {
                console.log('✅ Database is already connected');
            }
        } catch (error) {
            console.error('❌ Error connecting to the database', error);
        }
    }
}
