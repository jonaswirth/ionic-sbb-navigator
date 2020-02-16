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