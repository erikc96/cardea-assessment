import graphene
from graphene_django import DjangoObjectType
from assessment.jobs.models import Job as JobModel
from assessment.jobs.mutations import JobType

class Job(DjangoObjectType):
    class Meta:
        model = JobModel

class Query(graphene.ObjectType):
    jobs = graphene.List(Job)

    def resolve_jobs(self, info):
        return JobModel.objects.all()

schema = graphene.Schema(query=Query)
