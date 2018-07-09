module.exports = {
	setupFiles: ["./jest.setup.js"],
	snapshotSerializers: ["enzyme-to-json/serializer"],
	transform: {
		"^.+\\.js$": "babel-jest",
		"^.+\\.jsx$": "babel-jest"
	}
}