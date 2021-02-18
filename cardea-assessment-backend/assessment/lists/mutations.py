import graphene
from graphene_django import DjangoObjectType
from assessment.lists.models import List as ListModel

class ListType(DjangoObjectType):
    class Meta:
        model = ListModel

class Mutation(graphene.Mutation):
    class Arguments:
        example_arg = graphene.String()

    example_arg = graphene.Field(ListType)

    def mutate(self, example_arg):
        pass

