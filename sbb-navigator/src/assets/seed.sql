CREATE TABLE IF NOT EXISTS storedLocation
    (
        locationId INTEGER PRIMARY KEY AUTOINCREMENT,
        displayName TEXT,
        stationName TEXT,
        apiIdentifier TEXT,
        longitude DECIMAL,
        latitude DECIMAL
    );

GO;

CREATE TABLE IF NOT EXISTS locationTarget
    (
        locationTargetId INTEGER PRIMARY KEY AUTOINCREMENT,
        startId INTEGER FOREIGN KEY REFERENCES storedLocation(locationId),
        targetId INTEGER FOREIGN KEY REFERENCES storedLocation(locationId)
    );

--Some test data:

INSERT INTO storedLocation 
    (
        useAsStartLocation, 
        displayName, 
        stationName, 
        apiIdentifier, 
        longitude, 
        latitude
    ) 
    VALUES
    (
        true,
        'Home',
        'Zürich HB',
        'zrh',
        8.538373,
        47.378243
    );

INSERT INTO storedLocation 
    (
        useAsStartLocation, 
        displayName, 
        stationName, 
        apiIdentifier, 
        longitude, 
        latitude
    ) 
    VALUES
    (
        true,
        'Work',
        'Zürich Oerlikon',
        'oer',
        8.545368,
        47.412320
    );

INSERT INTO locationTarget (startId, targetId) VALUES (1, 2);
INSERT INTO locationTarget (startId, targetId) VALUES (2, 1);