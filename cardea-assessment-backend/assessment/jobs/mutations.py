import graphene
from graphene_django import DjangoObjectType
from assessment.jobs.models import Job as JobModel

class JobType(DjangoObjectType):
    class Meta:
        model = JobModel

class JobInput(graphene.InputObjectType):
    jobTitle  = graphene.Int(required=True)
    company   = graphene.Int(required=True)
    location  = graphene.Int(required=True)
    salaryMin = graphene.Int(required=False)
    salaryMax = graphene.Int(required=False)
    applyLink = graphene.Int(required=True)
    lists     = graphene.Int(required=True)


class Mutation(graphene.Mutation):
    class Arguments:
        jobData = JobInput

    job = graphene.Field(JobType)

    def mutate(self, info, jobData=None):
        job = JobModel(
            jobTitle=jobData.jobTitle,
            company=jobData.company,
            location=jobData.location,
            salaryMin=jobData.salaryMin,
            salaryMax=jobData.salaryMax,
            applyLink=jobData.applyLink,
            lists=jobData.lists
        )
        pass

