export class CategoryService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async create(data) {
        return this.repo.create(data);
    }
    async findAll() {
        return this.repo.findAll();
    }
    async delete(id) {
        return this.repo.delete(id);
    }
}
