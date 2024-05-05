function skillsMember() {
    return this.skills.map(function (skill) {
        return skill.name;
    });
}