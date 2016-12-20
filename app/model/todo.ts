export class ToDo {

	constructor(
		public id: string,
		public description: string,
		public dueDate: Date,
		public completed: boolean) {

	}

	serialize():any {
		return {
			description: this.description,
			completed: this.completed,
			dueDate: new Date(this.dueDate).getTime()
		}
	}
}