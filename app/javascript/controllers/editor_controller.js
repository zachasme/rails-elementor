import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["selected", "body"]

  selectedTargetConnected(element) {
    this.bodyTarget.value = element.textContent
  }

  update({ target }) {
    this.selectedTarget.textContent = target.value
  }

  setProperty({ target }) {
    console.log(target.name, target.value)
    this.selectedTarget.style[target.name] = target.value
  }

  select({ currentTarget }) {
    currentTarget.dataset.editorTarget = "selected"
  }
}
