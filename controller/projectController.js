import { response } from "express";
import { Project } from "../model/project";

function GetProjects(request, responce) {
   Project.find().then((projects) =>
      response.status(200).json(projects)
   ).catch((err) => responce.status(500).json(`error while getting all projects , ${err}`))
}

function AjouterProjects(request, responce) {
   Project.create([request.body])
      .then()
      .catch((error) => response.status(500).json(`error while adding a project, ${error}`))
}

function RechercherProjects(request, responce) {
   const id = request.params.id;
   Project.findById(id)
      .then((project) => responce.status(200).json({ project: project }))
      .catch((error)=>responce.status(500).json({message:`Cannot find Project by id ${id}` }))
}

function ModifierProjects(request, responce) {

}

function Supprimerprojects(request, responce) {

}

export default { GetProjects, AjouterProjects }