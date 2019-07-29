SELECT title, artists.name
FROM albums
JOIN artists ON artists.id = albums.artist_id
WHERE artists.name = 'AC/DC';
