import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

export class StorageService{

    constructor(private sqlite: SQLite) { }

    public Initialize(){
        // check if exists?
        // yes -> done
        // no -> seed database
    }

    public SeedDatabase():void{
        // Create Database
        this.sqlite.create({
            name: 'sbbnavigator.db',
            location: 'default'
        }).then((db: SQLiteObject) => {

            // Create table for stored locations
            db.executeSql('CREATE TABLE StoredLocations( )')
                .then(() => console.log("Created table 'StoredLocations'"))
                .catch(e => console.log(e));

            // Create table for target locations
            db.executeSql('CREATE TABLE LocationTarget( )')
                .then(() => console.log("Created table 'LocationTarget'"))
                .catch(e => console.log(e));
        })
        .catch(e => console.log(e));
    }
}