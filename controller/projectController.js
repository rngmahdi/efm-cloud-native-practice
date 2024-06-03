import { response } from "express";
import { Project } from "../model/project.js";

function GetProjects(request, responce) {
   Project.find().then((projects) =>
      response.status(200).json(projects)
   ).catch((err) => responce.status(500).json(`error while getting all projects , ${err}`))
}

function AjouterProjects(request, responce) {
   const { NomProject, Type, Statut, Employees } = request.body;
   Project.create({ _id: id }, { NomProject: NomProject, Type: Type, Statut: Statut, Employees: Employees })
      .then()
      .catch((error) => response.status(500).json(`error while adding a project, ${error}`))
}

function RechercherProjects(request, responce) {
   const id = request.params.id;
   Project.findById(id)
      .then((project) => responce.status(200).json({ project: project }))
      .catch((error) => responce.status(500).json({ message: `Cannot find Project by id ${id}` }))
}

function ModifierProjects(request, responce) {
   const id = request.params.id;
   const { NomProject, Type, Statut, Employees } = request.body;
   Project.updateOne({ _id: id }, { NomProject: NomProject, Type: Type, Statut: Statut, Employees: Employees })
      .then(() => responce.status(200).json())
      .catch((error) => responce.stats(500).json({ message: `cannot update project ,${error} ` }))
}

function Supprimerprojects(request, responce) {
   const id = request.params; id;
   Project.deleteOne(id)
}

export { GetProjects, AjouterProjects }